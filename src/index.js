import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bpp from './Bpp'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import registerServiceWorker from './registerServiceWorker';

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjgc4vzfq3k7s0145vp3m57fv' })

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
})


ReactDOM.render(
	<ApolloProvider client={client}>
		<Bpp />
	</ApolloProvider>,
	document.getElementById('root'));
registerServiceWorker();
