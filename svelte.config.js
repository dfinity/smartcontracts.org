import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		vite: {
			server: {
			  // Configure Vite for HMR with Gitpod.
			  hmr: process.env.GITPOD_WORKSPACE_URL
				? {
					// Due to port fowarding, we have to replace
					// 'https' with the forwarded port, as this
					// is the URI created by Gitpod.
					host: process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-"),
					protocol: "wss",
					clientPort: 443
				  }
				: true
			}
		  }
	}
};

export default config;
