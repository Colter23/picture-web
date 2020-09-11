<template>

  <div class="container">
    <div class="image-item" v-for="(img,index) in imageData.rows" :style="'width:'+imgHeight/img.height * img.width+'px;flex-grow:'+imgHeight/img.height * img.width">
      <div :style="'padding-bottom:'+img.height / img.width *100+'%;background: #ccc;'"></div>
      <img :data-src="img.path" src="" alt=""/>
    </div>

  </div>

</template>

<script>
export default {
  name: "WaterFall",
  props: {
    imgList: [],
    imgHeight: {
      type: Number,
      default(){
        return 500
      }
    }
  },
  data: ()=>({
    imageData: {
      start: 0,
      count: 20,
      rows: []
    }
  }),
  methods: {
    pushImage(){
      for (let i=this.imageData.start; i<this.imageData.start+this.imageData.count&&this.imgList[i]!=null; i++){
        this.$set(this.imageData.rows,this.imageData.rows.length, this.imgList[i]);
      }

      this.imageData.start += this.imageData.count;
      console.log(this.imageData)
    },
    showImage(){
      const windowHeight = document.documentElement.clientHeight;
      const scrollTop = window.pageYOffset;
      document.querySelectorAll('.image-item img').forEach((img)=>{
        const imageTop = img.getBoundingClientRect().top;
        // console.log(windowsHeight+'  '+scrollTop+'  '+imageTop)
        // console.log(imageTop)
        if (imageTop - scrollTop <= windowHeight-100){
          img.setAttribute('src',img.getAttribute('data-src'));
          // img.removeAttribute('data-src');
        }
      })
    }
  },
  created() {
    this.pushImage();
  },
  mounted() {

    this.showImage();
    document.addEventListener('scroll',()=>{
      this.showImage();
      const pageHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;
      // console.log(pageHeight+'  '+windowHeight+'  '+scrollTop)
      if (pageHeight - windowHeight - scrollTop <= 100){
        this.pushImage();
      }
    })
  }
}
</script>

<style scoped>
.container{
  width: 95%;
  /*height: 100px;*/
  /*background: #000;*/
  margin: 0 auto;
  padding: 80px 20px 0 20px;
  display: flex;
  flex-wrap: wrap;
}
.image-item{
  /*height: 500px;*/
  position: relative;
  margin: 4px;
  flex-grow: 1;
  background: #ccc;
}
.image-item img{
  /*height: 100%;*/
  position: absolute;
  top: 0;
  left: 0;
  vertical-align: top;
  max-width: 100%;
}
</style>
