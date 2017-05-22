The binding layer connects JavaScript appliction code and the C++ runtime. It
is used by systems such as Node.js, Chrome, PDFium, and the Chrome extension
system to expose APIs otherwise not implementable in JavaScript (e.g.,
networking, filesystem, etc.). Unfortunately, writing binding code is
error-prone and bugs in this layer can often have security implications.
Our papers explore this topic in more detail:

- Fraser Brown, Shravan Narayan, Riad S. Wahby, Dawson Engler, Ranjit Jhala,
  and Deian Stefan.  [Finding and Preventing Bugs in JavaScript
  Bindings](https://cseweb.ucsd.edu/~dstefan/pubs/brown:2017:finding.pdf).  In
  /Proceedings of the Symposium on Security and Privacy/, IEEE. May, 2017.
- Fraser Brown. [Superhacks: Exploring and Preventing Vulnerabilities in
Browser Binding Code](http://dl.acm.org/authorize?N25575). In /Workshop on
Programming Languages and Analysis for Security/, ACM. October, 2016.

We developed static checkers to find bugs in the binding layers of Node.js,
Chrome, PDFium, and the Chrome extension system. This repository contains the
code that was used to confirm the bugs. Most of these bugs have been reported
(see, e.g., [this
link](https://github.com/nodejs/node/issues?utf8=%E2%9C%93&q=author%3Adeian)).
There are some Node.js crashing bugs that we've yet to report (Node.js doesn't
consider these as security issues so these aren't zero-days).

We originally ran the checkers on a node [version from early September
2016](https://github.com/nodejs/node/commit/0e6c3360317ea7c5c7cc242dfb5c61c359493f34)
and Chrome [version 56.0.2915.0 (Developer
build)](https://github.com/nodejs/node/commit/0e6c3360317ea7c5c7cc242dfb5c61c359493f34).
We omit any files that have been removed (e.g., due to refactoring) from more
recent versions of the runtimes---node 7.7.4 and Chrome 56.0.2924.87---to
simplify the bug reporting process. Most of the node bugs can be triggered for
[node-chakracore](https://github.com/nodejs/node-chakracore) as well.
