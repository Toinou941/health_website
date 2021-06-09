<script>
  import Navbar from '../components/navbar.svelte';
  export let name;
</script>

<svelte:head>
	<title>Healthspace Home</title>
</svelte:head>

<Navbar />

<section class="relative flex items-center justify-center h-screen overflow-hidden">
	<div
	href="#video"class="relative z-30 p-5 text-2xl text-blue-500 bg-green-500 bg-opacity-80 rounded-xl"
	>
	  Welcome to Healthcare !
	</div>
	<video
	  autoplay
	  loop
	  muted
	  class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
	>
	  <source
		src="src\components\vecteezy_green-particles-on-this-medical-grid-with-a-hexagon-pattern-background-loop_2018897.mp4"
		type="video/mp4"
	  />
	  Your browser does not support the video tag.
	</video>
</section>
<!-- big hero landing page-->
<section class="min-h-screen bg-blue-100 p-32 text-center" style="background-image: url('https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'); background-size: cover">

	<h1 class="pb-6 text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-green-500">Learn more about our mission</h1>
  
	  <!-- svelte-ignore a11y-media-has-caption -->
	<div class="items-center inline-flex">
	  <iframe width="550" height="280" src="https://www.youtube.com/embed/AllwTaOr_yw" title="Patient Reported Outcome Measures" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
	<div class="space-x-2 py-16  bottom-0">
	  <a href="#more" class="py-3 px-8 pt-4 text-blue-500 hover:text-blue-400 bg-white hover:bg-gray-200 mr-2  rounded-lg hover:shadow-xl transition duration-300">Learn More</a>
	  <a href="/register" class="py-3 px-8 pt-4 text-blue-500 hover:text-blue-400 bg-white hover:bg-gray-200 mr-2  rounded-lg hover:shadow-xl transition duration-300">Sign up</a>
	</div>
  
</section>
<section id="more" class="min-h-screen bg-blue-100 p-32 text-center" style="background-image: url('https://images.unsplash.com/photo-1603715749723-240c88df18b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'); background-size: cover">

<h1 class="text-5xl text-white"> description of our mission, whats the purpose and so on...</h1>

</section>