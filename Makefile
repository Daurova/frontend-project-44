# Install dependencies using npm ci (clean install)
install:
	npm ci

# Run brain-games
brain-games:
	node bin/brain-games.js

#Publish brain-games
publish:
	npm publish --dry-run

#Run Eslint
lint: 
	npx eslint

.PHONY: install brain-games publish lint

