<template>
	<div class="inp_wrap">
		<h2>超市管理系统</h2>
		<p><div class="infor_left">用户名：</div><input type="text" ref='abc' class="userName"/></p>
		<p><div class="infor_left">密码：</div><input type="text" class="pwd"/></p>
		<p><input type="text" class="veri"/><div class="getVeri"><veri ref='veri'></veri></div></p>
		<div style="clear: both;"></div>
		<p><button class="login" @click="login">登录</button></p>
	</div>
</template>

<script>
import veri from './verification'
export default {
  components: {
    veri
  },
  methods: {
    //			1.校验验证码
    //			2.如果验证码校验失败,重新获取验证码,
    //			3.验证码校验成功,校验用户名或者密码是否正确
    login() {
      //				console.log($('.userName').val())
      //$refs:选中元素
      //				console.log(this.$refs.abc.value)
      var _this = this
      this.$axios({
        url: '/vueHandler/shopht?action=checkVeri',
        method: 'get',
        params: {
          veri: $('.veri').val()
        }
      }).then(function(response) {
        if (response.data.success) {
          _this
            .$axios({
              url: 'vueHandler/shopht?action=login',
              method: 'post',
              data: {
                userName: $('.userName').val(),
                pwd: $('.pwd').val()
              }
            })
            .then(function(res) {
              console.log(res)
              if (res.data.success) {
                alert(res.data.success)
              } else {
                alert(res.data.err)
              }
            })
        } else {
          alert(response.data.err)
          _this.$refs.veri.changeVeri()
        }
      })
    }
  }
}
</script>

<style>
.inp_wrap {
  width: 360px;
  height: 265px;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
h2 {
  text-align: center;
  margin-top: 20px;
}
p {
  width: 80%;
  margin: 20px auto 0;
  /*background: sandybrown;*/
}
.infor_left {
  width: 100px;
  text-align: right;
  display: inline-block;
}
.userName,
.pwd {
  width: 200px;
  height: 25px;
}
.veri {
  width: 30%;
  height: 26px;
  margin-left: 23px;
  float: left;
}
.getVeri {
  width: 30%;
  height: 30px;
  /*background: yellow;*/
  margin-left: 40px;
  display: inline-block;
}
.login {
  width: 30%;
  background: #448859;
  outline: none;
  border: 0;
  height: 26px;
  margin: 0 auto;
  display: block;
}
</style>