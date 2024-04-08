
folder : dummy

files: file1.js
     : file2.js

    after modification:
        file1'.js   
        file2'.js

---------------------------------------------

in order ::>
        working
    working Directory: temporary changes
        git add
    Staging index: about to commit changes
        git commit -m "message"
    repository: final committed changes

---------------------------------------------


