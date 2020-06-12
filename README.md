# TauntJs 

## To run:
 ```
 git clone https://github.com/tannerbyers/TautJs.git
 cd TautJs
 npm link
 taut
 ```

**Description**: This is a Node CLI that allows you to limit and analyze a project's dependencies security and performance issues. When you are install new packages and want to see if they interact with your file system, expain in file size past 5mb, or make some connection via your network BEFORE you have it installed, type ```taut install {package name}``` and it will inspect that for you and confirm before anything is install/downloaded. We also are working on a way to inspect existing project dependencies for the above issues. 

**Reason to use this**
Increased Performance, Security, and Peace of Mind that you know what your dependencies are doing. 
** Background 
- **Technology stack**: NodeJs

- **Status**:  Alpha[CHANGELOG](CHANGELOG.md).
  - **Links to production or demo instances**
  
  
 Trello: https://trello.com/invite/b/CeatfPLp/a403335efefc032361fea2abfbff3ecd/tautjs
```
Currently the CLI takes in "taut install" or "taut help". taut install will need to be expanded to accept options AND to inspect the package before isntall and prompting the user (eg "This dependency access your filesystem. Are you sure you want to continue this installation?")
```

## Dependencies

We will try to keep this as tiny as possible
This includes programming languages, databases or other storage mechanisms, build tools, frameworks, and so forth.

## Installation

Detailed instructions on how to install, configure, and get the project running.
This should be frequently tested to ensure reliability. Alternatively, link to
a separate [INSTALL](INSTALL.md) document.

## Configuration

If the software is configurable, describe it in detail, either here or in other documentation to which you link.

## Usage

Show users how to use the software.
Be specific.
Use appropriate formatting when showing code snippets.

## How to test the software

If the software includes automated tests, detail how to run those tests.

## Known issues

Document any known significant shortcomings with the software.

## Getting help

Instruct users how to get help with this software; this might include links to an issue tracker, wiki, mailing list, etc.

**Example**

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.

## Getting involved

This section should detail why people should get involved and describe key areas you are
currently focusing on; e.g., trying to get feedback on features, fixing certain bugs, building
important pieces, etc.

General instructions on _how_ to contribute should be stated with a link to [CONTRIBUTING](CONTRIBUTING.md).


----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)


----

## Credits and references
1. Related projects
2. Books, papers, talks, or other sources that have meaningful impact or influence on this project
