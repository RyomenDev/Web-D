// save the new comment object into the db
const savedComment = await comment.save(); // or use create

push - update operator (new entry)
pull - delete operator (delete entry)

{ new: true } : after finding and updating Id   
                return updated document

.populate("comments") // populate the comments array with the comment objects - actual document related to ID
.exec();