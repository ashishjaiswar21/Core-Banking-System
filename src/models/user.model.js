const mongoose  = require("mongoose")
const bcrypt = require("bcryptjs")
const { Timestamp } = require("mongodb")

const UserSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:[true,"Email is required for creating a user"],
            lowercase:true,
            trim:true,
            match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid Email address"],
            unique:[true,"Email Address Should be unique"]
        },
        name:{
            type:String,
            required:[true,"Name is required for creating an account"]
        },
        password:{
            type:String,
            required:[true,"Password is required for creating an account"],
            minlenght:[6,"password should contain more than 6 character"],
            select:false
        },
        systemUser:{
            type:Boolean,
            default:false,
            immutable:true,
            select:false
        }
    },
    {
        Timestamp:true
    }
)

// it acts like middle ware before save runs this
UserSchema.pre("save",async function() {
    if(!this.isModified("password")){
        return 
    }

    const hash = await bcrypt.hash(this.password,10)
    this.password =hash

    return 
})


UserSchema.methods.comparePassword = async function(password){
    // CORRECT ORDER: (plaintext, hash)
    return await bcrypt.compare(password,this.password)
}

const userModel = mongoose.model("user",UserSchema)
module.exports= userModel