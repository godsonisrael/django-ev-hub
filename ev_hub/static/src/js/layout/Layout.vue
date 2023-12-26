<!-- @format -->

<script>
	import { Link } from "@inertiajs/vue3";

	export default {
		components: { Link },
		data() {
			return {
				message: "Hello",
			};
		},
	};
</script>

<template>
	<div class="flex flex-row space-x-2">
		<div class="flex flex-col">
			<Link href="/">Dashboard</Link>
			<Link href="/stations/">Stations</Link>
			<Link href="/my-trips/">My trips</Link>
			<Link href="/subscription-plan/">Subscription plans</Link>
		</div>
		<div><slot /></div>
	</div>
</template>
