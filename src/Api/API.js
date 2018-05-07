const API = {
    portfolio: [
        {
            id: 1,
            date: "2018/05/01",
            title: "Test",
            image: "assets/images/project.png",
            description: "Enthusiastically build high standards in e-services without alternative manufactured products. Dramatically evisculate next-generation deliverables before e-business growth strategies. Interactively fabricate business content for diverse benefits. Monotonectally leverage other's synergistic services and worldwide alignments. Holisticly conceptualize maintainable infomediaries rather than frictionless solutions."
        },
        {
            id: 2,
            date: "2018/05/01",
            title: "Test 1",
            image: "assets/images/project.png",
            description: "Enthusiastically build high standards in e-services without alternative manufactured products. Dramatically evisculate next-generation deliverables before e-business growth strategies. Interactively fabricate business content for diverse benefits. Monotonectally leverage other's synergistic services and worldwide alignments. Holisticly conceptualize maintainable infomediaries rather than frictionless solutions."
        },
        {
            id: 3,
            date: "2017/05/01",
            title: "Test 2",
            image: "assets/images/project.png",
            description: "Enthusiastically build high standards in e-services without alternative manufactured products. Dramatically evisculate next-generation deliverables before e-business growth strategies. Interactively fabricate business content for diverse benefits. Monotonectally leverage other's synergistic services and worldwide alignments. Holisticly conceptualize maintainable infomediaries rather than frictionless solutions."
        },
        {
            id: 4,
            date: "2017/05/01",
            title: "Test 3",
            image: "assets/images/project.png",
            description: "Enthusiastically build high standards in e-services without alternative manufactured products. Dramatically evisculate next-generation deliverables before e-business growth strategies. Interactively fabricate business content for diverse benefits. Monotonectally leverage other's synergistic services and worldwide alignments. Holisticly conceptualize maintainable infomediaries rather than frictionless solutions."
        },
    ],
    education: [
        {
            id: 1,
            year: "2010",
            title: "Build high standards",
        },
        {
            id: 2,
            year: "2013",
            title: "Build high standards",
        },
        {
            id: 3,
            year: "2016",
            title: "Build high standards",
        },
    ],
    experience: [
        {
            id: 1,
            year: "April 2016 - August 2017 ",
            title: "conceptualize maintainable",
            as: "lorem ipsum"
        },
        {
            id: 2,
            year: "August 2017 - Present",
            title: "conceptualize maintainable",
            as: "lorem ipsum"
        },
    ],
    allPortfolio: function () { return this.portfolio },
    getPortfolio: function (id) {
        const isPortfolio = p => p.id === id
        return this.portfolio.find(isPortfolio)
    },
    allEducation: function () { return this.education },
    getEducation: function (id) {
        const isEducation = p => p.id === id
        return this.education.find(isEducation)
    },
    allExperience: function () { return this.experience },
    getExperience: function (id) {
        const isExperience = p => p.id === id
        return this.experience.find(isExperience)
    }
}

export default API