
git status

git init


There are many ways to create a file using BASH.

using touch touch newFile.txt only creates.
using echo echo > newFile.txt only creates.:
        echo "Put any content here" >> Newfile.txt

        In bash alone, you can simple use echo (to initialize it) and vi (to edit it)

        echo Text example> aNewFile.txt
        vi aNewFile.txt
        git add aNewFile.txt
        git commit -m "Add aNewFile.txt"

using cat cat > newFile.txt creates and can start appending to file.
using vim vim newFile.txt creates and can start editing the file.

After creating the file, add it to the git repository.

git add newFile.txt
git commit -m "added new file"



Use this code to open a new text file
subl newFile.txt

-----------------------------------------
git clone

git clone https://github.com/username/repositoryname.git urFolderName

git clone https://github.com/Darkhold-0/Minor.git new

--------------------------------------------
git diff: will show the difference between the current version and the last committed version.
