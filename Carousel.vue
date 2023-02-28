<style lang="scss">
	.carousel{
		.clicker{
			color: rgb(255, 255, 255);
			font-size: 55px;
			margin: 0 20px;
			cursor: pointer;
		}
		.close{
			opacity: 1;
		}
		.modal-container{
			background: none !important;
			box-shadow: none !important;
		}
		.modal-body{
			margin: 0 !important;
			max-height: 80vh !important;
			overflow-y: auto !important;
		}
		.modal-header{
			border: none !important;
		}
		.modal-footer{
			border: none !important;
		}
	}

	@media screen and (max-width: 768px){
		.carousel{
			.clicker{
				color: rgb(255, 255, 255);
				font-size: 25px;
				margin: 0 10px;
				cursor: pointer;
			}
		}
	}


</style>

<template>
    <div class="carousel" @click="closeModal($event)">
		<div class="row-container d-flex align-items-center justify-content-center pt-3 pb-3 bg-transparent">
			<img v-for="(picture, index) in pictures" :key="picture.id" id="carousel-picture" class="rounded shadow-md w-25" :src="$root.$data.awsUrl + pathUrl + picture.file_name" :alt=picture.file_name @click="openModal(index)">
		</div>
		<modal v-if="showModal" @close="showModal = false">
			<h3 class="bg-transparent" slot="header">
				<button class="modal-default-button close text-white" @click="showModal = false">X</button>
			</h3>
			<div class="bg-transparent d-flex align-items-center justify-content-center" slot="body">
				<span name="clicker" class="clicker col-1 m-0 p-0" @click="prevPage">❮</span>
				<img :src=pictureModal class="rounded shadow-md col-lg-6 col-10 m-0 p-0">
				<span name="clicker" class="clicker col-1 m-0 p-0" @click="nextPage">❯</span>
			</div>
			<div class="bg-transparent" slot="footer">
			</div>
		</modal>
	</div>
</template>

<script>


	export default {
		props: ['files', 'path'],

		data () {
			return {
				pictures: [],
				current: 0,
				showModal: false,
				pictureModal: '',
				pathUrl: 'owned/large/'
			};
		},

		mounted () {
			this.filterArray();
		},

		methods: {
			filterArray() {
				this.files.forEach(file => {
					if(file.profile_template_position_id == 6 || file.award_template_position_id == 6) this.pictures.push(file);
				});
			},

			openModal(index) {
				this.showModal = true;
				this.current = index;
				this.pictureModal = this.$root.$data.awsUrl + this.pathUrl + this.pictures[index].file_name;
			},

            prevPage() {
				this.current = this.current - 1;
				if(this.current < 0) this.current = this.pictures.length - 1;
				this.openModal(this.current);
            },

            nextPage() {
				this.current = this.current + 1;
				if(this.current > this.pictures.length - 1) this.current = 0;
				this.openModal(this.current);
            },

            applyChange () {
                this.query.page = 1;
                this.fetch()
			},

			closeModal (event) {
				if (event.target.id !== "carousel-picture" && event.target.getAttribute('name') !== "clicker") {
					this.showModal = false;
				}
			}
		}	
	}
</script>
