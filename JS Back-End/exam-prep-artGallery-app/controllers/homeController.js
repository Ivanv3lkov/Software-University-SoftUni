const router = require('express').Router();

const publicationService = require('../services/publicationService')
const userService = require('../services/userService')


router.get('/', async(req, res) => {
    const publicationsResult = await publicationService.getAll().lean();
    const publications = publicationsResult.map(x => ({...x, shareCount: x.usersShared.length}))


    res.render('home', {publications});
})



router.get('/profile', async (req, res) => {
    const user = await userService.getOne(req.user._id).populate('publications').populate('shares').lean();

    const publicationTitles = user.publications.map(x => x.title).join(', ');

    const sharedTitles = user.shares.map(x => x.title).join(', ');

    
    res.render('home/profile', {...user, publicationTitles, sharedTitles});
})


module.exports = router;


