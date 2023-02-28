<template>
	<div id="carouselExampleAutoplaying" class="carousel slide"  @keydown="checkSlide($event)" tabindex="0" data-bs-ride="carousel">
		<slot></slot>
		<!-- <button @click.prevent="Next" class="btn btn-next"><i class="fa fa-angle-right"></i></button>
		<button @click.prevent="Prev" class="btn btn-prev"><i class="fa fa-angle-left"></i></button> -->

		<button @click.prevent="prev" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden"></span>
	  	</button>
		<button @click.prevent="next" class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden"></span>
		</button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				index : 0,
				slides : [],
				slideDirection: '',
			}
	},
	computed: {
		slidesLength() {
			return this.slides.length;
		}
	},
	mounted(){
		this.slides = this.$children;
		this.slides.map( (slide,index) => {
			slide.index = index;
		});
	},
	methods: {
		next(){
			this.index++;
			if(this.index >= this.slidesLength){
				this.index = 0;
			}
			this.slideDirection = 'slide-right';
		},
		prev(){
			this.index--;
			if(this.index < 0){
				this.index = this.slidesLength - 1;
			}
				this.slideDirection = 'slide-left';
		},
		checkSlide(event){
			if(event.keyCode === 39){
				this.next();
			}else if (event.keyCode === 37){
				this.prev();
			}else {
				return;
			}
		},
		}
		
	}
</script>

<style>

</style>
