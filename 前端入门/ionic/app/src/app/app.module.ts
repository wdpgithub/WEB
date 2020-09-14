import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { AppVersion } from '@ionic-native/app-version';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { ChatPage } from '../pages/chat/chat';
import { NotificationPage } from '../pages/notification/notification';
import { MorePage } from '../pages/more/more';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage} from '../pages/user/user';
import { LoginPage } from '../pages/login/login';
import { OtherwebPage } from '../pages/otherweb/otherweb';
import { HeadfacePage } from '../pages/headface/headface';
import { QuestionPage} from "../pages/question/question";
import { DetailsPage} from "../pages/details/details";
import { AnswerPage } from "../pages/answer/answer";
import {  ChatdetailsPage} from "../pages/chatdetails/chatdetails";
import {  RelativetimePipe } from '../pipes/relativetime/relativetime';
import { UserdatalistPage } from "../pages/userdatalist/userdatalist";
import { AboutversionPage } from '../pages/aboutversion/aboutversion';



import { IonicStorageModule } from '@ionic/storage';

import { EmojiProvider } from '../providers/emoji/emoji';
import { ComponentsModule } from '../components/components.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { QRScanner } from '@ionic-native/qr-scanner';
import { ScanPage } from "../pages/scan/scan";
import{ ZbarPage } from '../pages/zbar/zbar';

//导入四个外部加载进来的组件
import { File } from '@ionic-native/file';
import { Transfer,TransferObject } from '@ionic-native/transfer';
import{ FileTransfer} from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';


import { ChatserviceProvider } from '../providers/chatservice/chatservice';
import { ZBar } from '@ionic-native/zbar';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    LoginPage,
    TabsPage,
    OtherwebPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage,
    ChatdetailsPage,
    RelativetimePipe,
    UserdatalistPage,
    ScanPage,
    AboutversionPage,
    ZbarPage
  ],
  imports: [
    BrowserModule,
    HttpModule,//全局需要导入Http
    IonicModule.forRoot(MyApp,{
      backButtonText:"返回",
    }),
    ComponentsModule,
    IonicStorageModule.forRoot()//全局定义Storage模块
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    LoginPage,
    TabsPage,
    OtherwebPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage,
    ChatdetailsPage,
    UserdatalistPage,
    ScanPage,
    AboutversionPage,
    ZbarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,//rest的定义导入
    File,
    Transfer,
    FileTransfer,
    FilePath,
    Camera,
    EmojiProvider,
    ChatserviceProvider,
    QRScanner,
    AppVersion,
    ZBar,
    SettingsProvider
  ]
})
export class AppModule {}
