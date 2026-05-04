# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Name: Aditya Jadhav

Lab Partner: None

## GitHub Pages Links

- [Expose / Party Horn](https://AdityaJadhav17.github.io/Lab5_Starter/expose.html)
- [Explore / Speech Synthesis](https://AdityaJadhav17.github.io/Lab5_Starter/explore.html)

## Check Your Understanding

1. Would you use a unit test to test the full message feature of a messaging application? Why or why not?

No, I would not use only a unit test for the full message feature. Sending a full message involves many parts working together, such as the UI, sending logic, receiving logic, backend/database behavior, and possibly network requests. That makes it better suited for integration testing or end-to-end testing because those tests can check whether the whole feature works together correctly.

2. Would you use a unit test to test the max message length feature of a messaging application? Why or why not?

Yes, max message length is a good candidate for a unit test. It is a small and isolated rule that can be tested by giving a function input strings of different lengths and checking whether each one is accepted or rejected correctly.
