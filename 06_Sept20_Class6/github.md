### Some Resources

[Github Pages](https://pages.github.com/)


### Basic Push to Github

The first time you are pushing to a repository:

1. git init *initializes a new repository*

2. git add *works one of two ways:*

  * git add . *adds the entire contents of the repository*
  
  * git add <file or folder name> *just adds what you have indicated*
  
3. git commit -m "commit message" *must include a commit message or you might end up in vim*

4. git remote add origin <origin url from github>
  
5. git push -u origin master


Every other time you push to that repository:

1. git add *either the entire contents or a specific folder or file name*

2. git commit -m "commit message" *must include a commit message or you might end up in vim*

3. git push

NOTE: If the contents of your repository have changed because a collaborator made changes, or perhaps you edited a file via Github's web interface, you will have to git pull to integrate those changes locally before you can push.
  
 
