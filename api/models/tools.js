module.exports = {
    //https://alexanderzeitler.com/articles/mongoose-tojson-toobject-transform-with-subdocuments/
    //https://dev.to/simrandotdev/removing-specific-fields-from-a-mongoose-returned-object-1i7c
    toJSON: function() {
        const doc = this;
        const object = doc.toObject();
    
        object.id = object._id;
        delete object._id;
    
        delete object.createdAt;
        delete object.updatedAt;
        delete object.__v;
    
        return object;
    }
}
