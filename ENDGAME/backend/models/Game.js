const mongoose = require("mongoose")
const User = require("./User")

const gameSchema = mongoose.Schema({
    messages: {
        type: [Object]
    },
    participants: {
        type: [mongoose.mongo.ObjectId],
        required: true
    }
})

gameSchema.statics.addMessage = async (gameId, msg) => {
    let game
    const users = await User.find()
   
    try {
        game = await GameModel.findById(gameId)

        if (game == null) {
            console.log("Game not found.");
            return
        } else if (!users.map(u => u._id.toString()).includes(msg.user)) {
            console.log("Game has invalid user.")
            return
        }

        game.messages.push(msg)
        game.save()
        return {game: game._id, msg: msg}
    } catch (e) {
        console.log(e);
    }
}

const GameModel = mongoose.model("Game", gameSchema)

module.exports = {
    Schema: gameSchema,
    Model: GameModel
}