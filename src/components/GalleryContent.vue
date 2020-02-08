<template>
  <div
    id="gallery-pictures"
    class="row bottom-line collapse"
  >
    <div
      v-for="i in imageCols"
      :key="i"
      class="col-sm-4 text-center"
    >
      <div
        v-for="j in imageRows"
        :key="j"
      >
        <img
          v-if="(3*(j-1) + (i-1)) < images.length"
          :src="images[3*(j-1) + (i-1)].src"
          class="img-fluid padded rounded"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryContent',
  data () {
    return {
      imageCols: 3,
      images: [
        {'src': 'https://www.dropbox.com/s/yy667np27le3wl0/IMG_20091231180000.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/gy2sz3e5nkha4xm/IMG_20110616154502.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/7beva0vmg65y2p1/IMG_20110626164906.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/3ifn76ljd3g1tbo/IMG_20121221175536.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/d7kd9keiq09hu1g/IMG_20150103153509.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/wazo675zxhfjcv3/IMG_20150104211239.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/3gmifauoumcgpss/IMG_20150523204755.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/o106bb1dp6i2gkq/IMG_20150627192401.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/uztvgb5tcmov3ui/IMG_20150816175717.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/zuv9tugv6xirtfw/IMG_20150906133622.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/hvl779dzksx4jt2/IMG_20151017153729.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/wnmejrts2akg2sb/IMG_20160423164816.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/wk5j048ptw53d7k/IMG_20160514202138.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/dar8xvbx3trqova/IMG_20160517203245.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/3whit0ug0huxsko/IMG_20160805202214.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/ce7cfvgkx6qh29p/IMG_20161008122349.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/g04pvtq2knhtf1p/IMG_20170516121103.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/23fzjh5edsv8yki/IMG_20180518141914.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/zmgt1plx3lfagbo/IMG_20180623133223.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/x9l9hdkptwaen6w/IMG_20180701122421.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/5vd1khn9mbodai2/IMG_20180704223327.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/3ldvzwa929xm70e/IMG_20180728161453.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/tljttrlxb01ucot/IMG_20180800815817.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/x9o5k9v39qhg1u5/IMG_20180801061615.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/uolibpahxletyb6/IMG_20180801210123.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/rivmnfxfapgyupx/IMG_20180802122925.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/ld6ixkp9feqmyfm/IMG_20180802123117.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/owc340xcavx7hur/IMG_20180803115328.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/4vpx5wb5isi5957/IMG_20180803541301.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/cfobk3bx6putj7g/IMG_20180804185135.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/ywrpcfre8w3fo9r/IMG_20180804185955.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/s0qsoehr9lsu531/IMG_20180805180345.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/5v7ezrj27ssoo54/IMG_20180807181440.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/wmf66g0j114vyd3/IMG_20180807201548.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/n6ns9cz6qk2hoad/IMG_20180808104204.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/v6xm351z3h4dmzz/IMG_20180808131659.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/exs4axl2n2wenx9/IMG_20180809143509.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/w3hugqnq9z3kqwa/IMG_20180809154726.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/70joke6x4kzall1/IMG_20180810113545.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/v7td5ad3wrjaozc/IMG_20180810114856.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/3nda6peh9n7kqiv/IMG_20180810140411.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/z1rszvwujawz2vo/IMG_20181018160859.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/jcylt9svatmiwx8/IMG_20181019192908.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/38708ac4jd4umlw/IMG_20181021111358.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/djadoqis31tqbbx/IMG_20181110173233.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/7h7kcmvesh202e4/IMG_20181119124930.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/vuzhuaz36ij2mii/IMG_20181119153425.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/vgfxisf8o9rg7ne/IMG_20181122200158.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/1oxp6mmoxjjak7i/IMG_20190208171245.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/cg8udm0v4mxxyuo/IMG_20190730000001.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/ydlrnq0jdcb90we/IMG_20190730000002.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/345ddz2xu8gv0jv/IMG_20190730000003.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/cuv5z0iarvl9vjp/IMG_20190730000004.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/xyuqfredkon46a6/IMG_20190730000005.jpg?raw=1'},
        {'src': 'https://www.dropbox.com/s/7ylrp125tnfnlt6/IMG_20190730000006.jpg?raw=1'}
      ]
    }
  },
  computed: {
    imageRows: function () {
      return Math.ceil(this.images.length / this.imageCols)
    }
  }
}
</script>

<style scoped>
.collapse.show {
    display: inline-flex;
}
</style>
