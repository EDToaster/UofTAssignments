cwd := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))

upload:
	rm -rf $(cwd)build
	mkdir $(cwd)build
	zip -r $(cwd)build/func.zip .
	aws lambda update-function-code --region us-west-2 --function-name UofTAssignmentRemind --zip-file fileb://$(cwd)build/func.zip
	