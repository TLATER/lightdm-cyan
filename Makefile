PREFIX ?= /usr/share

cyan: src/
	yarn build

install: cyan
	cp -r $^ "${PREFIX}/web-greeter/themes/"
