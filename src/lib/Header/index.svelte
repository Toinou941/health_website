<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
    import Modal from "./Modal.svelte";
    let modal;
</script>

<header class="bg-green-400 text to-blue-500 p-4 flex justify-between items-center">
	<div>
		<a href="/">
			<img class="h-20 w-30 inline-block border-ltext text-5xl text-white font-bold" src={logo} alt="healthkit" /> 
		</a>
	</div>
	<div class="flex items-stretch">
		<a href="/" class="inline-block p-2 text-blue-700 font-bold hover:text-white mr-2 text-3xl rounded-lg bg-white hover:bg-blue-500 hover:shadow-xl transition duration-300">Home</a>
		<a href="/about" class="inline-block p-2 font-bold text-blue-700 hover:text-white mr-2 text-3xl rounded-lg bg-white hover:bg-blue-500 hover:shadow-xl transition duration-300">About</a>
		<a href="/about" class="inline-block p-2 font-bold text-blue-700 hover:text-white text-3xl rounded-lg bg-white hover:bg-blue-500 hover:shadow-xl transition duration-300">Contact</a>

	</div>
	<div>
		<button on:click={() => modal.show()} class="inline-block p-2 text-white hover:text-blue-400 mr-2 font-bold">Login</button>
		<Modal bind:this={modal}>
			<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
				<div class="mb-4">
				  <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
					Username
				  </label>
				  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
				</div>
				<div class="mb-6">
				  <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
					Password
				  </label>
				  <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
				</div>
				<div class="flex items-center justify-between">
				  <button class="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
					Sign In
				  </button>
				  <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
					Forgot Password?
				  </a>
				</div>
			</div>
		  <button on:click={() => modal.hide()}>Close</button>
		</Modal>
		<a href="/register" class="inline-block py-2 px-4 text-blue-700 bg-white hover:bg-blue-500 font-bold hover:text-white rounded transition ease-in duration-150">Sign Up</a>
	</div>

	
</header>
  