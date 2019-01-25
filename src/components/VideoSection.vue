<template>
  <div id="video-section" class="c-video-section"
  :style="{ 'background-image': `url(${  require('@/assets/'+bgImage) })` }">
    <div class="c-video-section-inner h-full">
      <div class="container mx-auto h-full">
        <div class="h-full flex flex-col justify-center items-center">
          <div class="content-inner text-center">
            <div class="video-content text-center">
              <a href="#" class="popup-video block">
                <i class="zmdi zmdi-play-circle-outline zmdi-hc-fw"></i>
              </a>
              <small class="inline-block uppercase text-grey">Watch this video</small>
              <h4 class="font-semibold text-3xl text-white">How we work together</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgImage: {
      type: String,
      default: 'bg-video.jpg',
      required: false
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
#video-section {
  height: 300px;
  &.c-video-section {
    display: table;
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    z-index: 3;
    overflow: hidden;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.5;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background-image: url('../assets/video-bg-overlay.png');
      background-repeat: no-repeat;
      background-position: 100% 50%;
      background-size: 50%;
      z-index: 2;
    }
    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      background-color: #232838;
      background-image: -webkit-radial-gradient( 50% 50%, circle closest-side, rgba(59,60,62,0.87843) 0%, rgba(59,60,62,0.88) 0%, rgba(47,50,59,0.94) 47%, rgb(35,40,56) 100%);
      background-image: -ms-radial-gradient( 50% 50%, circle closest-side, rgba(59,60,62,0.87843) 0%, rgba(59,60,62,0.88) 0%, rgba(47,50,59,0.94) 47%, rgb(35,40,56) 100%);
      opacity: .93;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=93)";
    }

    >.c-video-section-inner {
      display: table-cell;
      vertical-align: middle;

      .video-content {
        position: relative;
        z-index: 4;

        h4 {
          margin: 0;
          font-size: 2.571em;
          text-transform: capitalize;
        }

        .popup-video {
          i {
            display: inline-block;
            font-size: 10.000em;
            color: #f4f4f4;
            background-image: -webkit-linear-gradient(-106deg, #6586cd, #292b9b, #168ef0);
            background-image: -webkit-linear-gradient(196deg, #6574cd, #292b9b, #168ef0);
            background-image: linear-gradient(-106deg, #6574cd, #292b9b, #168ef0);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
  }
}

@media (min-width: 576px) {
  #video-section {
    height: 400px;
  }
}
@media (max-width: 767px) {
  .popup-video {
    i {
      font-size: 6em !important;
    }
  }
}
@media (min-width: 768px) {
  #video-section {
    height: 450px;
  }
}
@media (min-width: 992px) {
  #video-section {
    height: 550px;
  }
}
@media (min-width: 1200px) {
  #video-section {
    height: 600px;
  }
}
</style>
