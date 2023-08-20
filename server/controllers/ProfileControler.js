const { Profile } = require('../model/Profile');
const User = require('../model/User');

const ProfileController = {
    
    createProfile: async (req, res) => {
        try {
            const profile = await Profile.create(req.body);
            res.status(201).json(profile);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllProfiles: async (req, res) => {
        try {
            const profiles = await Profile.findAll({ include: User });
            res.status(200).json(profiles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getProfileById: async (req, res) => {
        try {
            const profile = await Profile.findByPk(req.params.id, { include: User });
            if (!profile) return res.status(404).json({ error: 'Profile not found' });
            res.status(200).json(profile);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateProfile: async (req, res) => {
        try {
            const updated = await Profile.update(req.body, {
                where: { id: req.params.id }
            });
            if (!updated[0]) return res.status(404).json({ error: 'Profile not found' });
            const updatedProfile = await Profile.findByPk(req.params.id);
            res.status(200).json(updatedProfile);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

   
}

module.exports = ProfileController;
