const { Model } = require('objection');
const User = require('./User.js');


class Advertisement extends Model {
    static tableName = 'advertisements';

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
              from: 'advertisements.userId',
              to: 'users.id'
            }
        }
    }
}

module.exports = Advertisement;