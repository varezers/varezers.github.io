+++
date        = "2021-10-15"
title       = "Test driven development"
type        = "post"
tags        = ["development"]
language    = ""
scripts     = []
toc         = "true"
+++

# What is TDD
Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed.

# Benefits of TDD
* Better Code Quality - TDD encourages
	* DRY and KISS principle - code which can be unit tested. Testable outcomes are simple and easy to understand;
	* Maintainable code - it takes less effort to focus on smaller, managable chunks of code;
	* Easier refactoring;
* Prevent bugs - writing a unit test may:
	* uncover edge cases missed in planning requirements;
	* forces code collaborators to not break previously agreed requirements of a code;
	* forces to contribute new tests when new requirements are added over time;
* Documentation - unit tests are a documentation of how function is supposed to work and output. Due to contsant usage unit tests become an easy to maintain documentations for expected behaviour. Thus it serves as a blueprint for development;
* Faster acclimatization for new devs;
* Faster Code Reviews - much easier to spot antipatterns in a readable code;
* Context switching - interruptions may take up to 20 minutes to re-focus developer time to tend to bug in production. Budgeting time for TDD will prevent bugs and additional context switching;
* Unit tests as a bug report - whenever a bug has entered code unit test will fail in predictable ways and produce high-quality bug report;
* Reduce costs of customer service;
* Reduce customer abandonment;
* Increase usr growth;

[TDD saves 40%-80% bugs](//medium.com/javascript-scene/the-outrageous-cost-of-skipping-tdd-code-reviews-57887064c412).

> Due to exponentially escalating costs of rework, meta-work (work about work), responsibility hand-offs, interruptions, and eventually customer support, bug triage, and maintenance, fixing a production bug may cost 100x more than fixing a bug at design time, and over 15x more than fixing a bug at implementation time.

# Supposed drawbacks of TDD
* Speed:
	* it is expected to spend more time planning and writing tests and fail cases for a code initially...
	* ..even more so it is expected to take time to decouple, document and simplify existing logic...
	* ..but whence stage for simple, understandable and documented code is set - maintenance and new feature addition takes up to 30% less time;
* Difficult to learn - learning TDD requires team to think differently and budget time for planning better;
* Large volatile projects may become hard tom maintain - whence logic has to be completely redone so will the unit tests need to conform to new requirements;
* Unit tests take long to run;

# How to TDD
1. Write a good unit test - a unit test should take into account all input, output and possible exceptions of a tested code.
	* AAA principle:
		* Arrange - variables, fields, properties, exceptions;
		* Act - call a method with different input variations;
		* Assert - verify result and expected exceptions;
	* Test limitations:
		* What happens when input/output is different type (bool/int/string)?
		* What happens when expected output is an emoji?
		* What happens when expected output is 3000 entries?
		* What happens when method is interrupted?
		* What happens when method times out?
		* What must happen for method to run out of memory?
	* Tests should be independent:
		* Tested function should not involve other tested functions;
		* Unit tests should not depend on previous test states (setup/teardown discipline);
2. Run the accepted tests - expect a failure;
3. (Re) Write function - make changes for test to pass;
4. Back to point #2

# How not to TDD
* Mocking - Maybe a functional test would be a better fit.
* Fixing unit tests without refactoring code - just throwing new expected exceptions is not a way to do it;
* assert.isTrue - heavy relying on boolean checking is a sign of useless unit test;
* Writing tests only for positive scenarios - most bugs come from unhandled exceptions and negative cases;
* Too complicated unit tests - too complicated unittests triggering different functions based on array key is not a way to go;


```
const tests = [
	'applyFee' = [
		'input' = 11,
		'expectedOutput' = 233
		'error' = 'Fee has not been applied'
	]
]
```

# TDD Examples




