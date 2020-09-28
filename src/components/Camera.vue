<template>
    <div id="kamera">
        <video autoplay></video>
        <input v-if="mobile" type="file" accept="image/*" capture="camera" />
            <button>CAPTURE</button>
    </div>
</template>
<script>
export default {
    name: "Camera",
    data(){
            return {
                mobile : false
            }
    },
    methods: {
        init (){
            if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){

                navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
                    const videoPlayer = document.querySelector("video");
                    videoPlayer.srcObject = stream;
                    videoPlayer.play()
                })
            }else{
                this.mobile = true;
                console.log('perangkat anda tidak ada kamera')
            }
        }
    },
    mounted (){
        this.init()
    }

}
</script>