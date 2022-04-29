const {sequelise, DataTypes} = require('../helpers/db-connection');

const VIP = sequelise.define('VIP', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

const VIPNetwork = sequelise.define('VIPNetwork', {
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    vip_id: {
        type: DataTypes.INTEGER,
        references: {
            model: VIP,
            key: 'id',
        }
    },
    verification_code: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

VIP.sync(); 
VIPNetwork.sync();


module.exports = { VIP, VIPNetwork }