#Balance

This is a very very simple round-robin load balancer that I put together for testing apps in development.
I just wanted to be able to fire up something quickly without messing with apache or nginx.

##Usage

```
npm install balance
```

```
balance --port 8080 --upstream 8081,8082,8083
```

where upstream are the ports that your child http processes are running on.

You can also specify a host in upstream if necessary.

That's it.
