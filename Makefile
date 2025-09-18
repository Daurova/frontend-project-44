# Install dependencies using npm ci (clean install)
install:
	npm ci

# Run brain-games
brain-games:
	node bin/brain-games.js

#Run brain-even
brain-even:
	node bin/brain-even.js

#Run brain-calc
brain-calc:
	node bin/brain-calc.js

#Run brain-gcd
brain-calc:
	node bin/brain-gcd.js

#Publish brain-games
publish:
	npm publish --dry-run

#Run Eslint
lint: 
	npx eslint

.PHONY: install brain-games publish lint

