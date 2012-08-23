[![build status](https://secure.travis-ci.org/johnnypez/balance.png)](http://travis-ci.org/johnnypez/balance)
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

##TODO

This has been thrown together in order to get the basics working for what I needed.
I will come back to it when I have more time and make improvements.
If anyone wants to send me a pull request, fire away.

The options parser doesn't seem to be working properly for required options so it throws errors, I don't know if I'm using commander incorrectly there or not?

