<script setup lang="ts">
defineProps<{ label: string }>();

import { ref } from 'vue';

import axios from '../../axiosInstance';
import router from '../../router/index';

const id = ref<string>(window.location.href.split('/')[4]);

const deleteStudent = () => {
	axios.get(`/student-delete/${id.value}`);
	router.push('/uczniowie');
};
</script>

<template>
	<!-- Button trigger modal -->
	<button type="button" class="btn btn-primary mb-3 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
		{{ label }}
	</button>

	<!-- Modal -->
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">Czy na pewno chcesz usunąć tego ucznia?</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Anuluj</button>
					<button @click="deleteStudent" type="button" class="btn btn-primary" data-bs-dismiss="modal">
						Potwierdź
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
