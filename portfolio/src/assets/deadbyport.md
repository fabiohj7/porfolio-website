# Dead by Port

An open source cybersecurity tool made for HTTP flood attacks.

## Why?

As I got more into DevOps, I learned the magic of Docker containers. As my projects grew I starting working on docker-compose more. That's when I thought "There has to be a way to leverage containers to use them as a cybersecurity tool."

After some research I found that an HTTP flood would be the perfect application for this kind of project.

## How?

Leveraging the networking power of Docker-compose between different containers I knew that you would be able to create some type of swarm attack using a lot of containers all at once to attack a vulnerable website.

Having each docker container connect to a proxy and then sending requests non-stop to the target. Given that each container could be multithreaded imagine what multiple containers can do.

## The Problems

Unfortunately, each container does not generate its own resources as far as computing power goes. That's where a good container networking could come in handy and use a cluster of computers to gain more computing power.

Given that this project is still in development there is a lot about proxies that I still haven't figured out like:

- Is there a cost to the proxies?
- How many proxies can I get for free?
- Can I get enough proxies for all the containers?

## The development

As **DeadByPort** development is in process, a good base has been made already. I was able to get all containers to send multithreaded requests being able to send multiple requests with just one simple container.

The development of a coordinated swarm using docker-compose has started and it is in progress.

A system for the proxies has been put in place.
