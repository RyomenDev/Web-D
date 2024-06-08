Image/video upload

cloudinary:  app where img/video will be stored
            media management platform

index.js: dbConnection, cloudinary config
        app setup, middleware connections

route: FileUpload.js - ImageUpload, VideoUpload, ImageReduceUpload, localFileUpload

/ImageUpload :  
                request have name, email, tags, size,  
                directly upload image to cloudinary and make entry in db
/VideoUpload :  
                request have name, email, tags, size,  
                directly upload image to cloudinary and make entry in db
/ImageReduceUpload:
                add limit to size , quality down
                upload image to cloudinary and make entry in db
/localFileUpload:
                store at local server temporary which will be saved in media server (cloudinary) ,  after that del from local server

Model: files.js - schema (name,tag,email,file)
Controller: files.js (logic)

