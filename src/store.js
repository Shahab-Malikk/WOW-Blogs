import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        homeBlogs: [{
                id: 1,
                blogImg: 'blog1',
                title: 'The Importance of Creativity: How it Affects Our Future',
                description: 'Are you creative enough for the future? In the last couple years, creative skills ranked high for demand, why is that?',
                author: 'Garry Keller',
                date: '26-Apr-2021'
            }, {
                id: 2,
                blogImg: 'blog2',
                title: 'The Creative Environment (Press) : Does it Inspire or Stifle Your Creativity?',
                description: 'Think about your place of work. Would you say that your work environment mimics the sitcom The answer may surprise you! ',
                author: 'Garry Keller',
                date: '26-Apr-2021'
            }, {
                id: 3,
                blogImg: 'blog3',
                title: 'The Creative Product - What Makes Something Creative?',
                description: 'Have you ever wondered about what makes something truly creative?The answer may surprise you!',
                author: 'Garry Keller',
                date: '26-Apr-2021'
            }

        ],
        allBlogs: [{
                id: 1,
                blogImg: 'blog1',
                title: 'The Importance of Creativity: How it Affects Our Future',
                description: 'Are you creative enough for the future? In the last couple years, creative skills ranked high for demand, why is that?',
                author: 'Garry Keller',
                date: '26-Apr-2021'
            }, {
                id: 2,
                blogImg: 'blog2',
                title: 'The Creative Environment (Press) : Does it Inspire or Stifle Your Creativity?',
                description: 'Think about your place of work. Would you say that your work environment mimics the sitcom The answer may surprise you! ',
                author: 'Garry Keller',
                date: '26-Apr-2021'
            }, {
                id: 3,
                blogImg: 'blog3',
                title: 'The Creative Product - What Makes Something Creative?',
                description: 'Have you ever wondered about what makes something truly creative?The answer may surprise you!',
                author: 'Garry Keller',
                date: '26-Apr-2021'
            },
            {
                id: 4,
                blogImg: 'blog4',
                title: 'Four Ways of Understanding Creativity',
                description: 'Are you creative enough for the future? In the last couple years, creative skills ranked high for demand, why is that?',
                author: 'Garry Keller',
                date: '26-Apr-2021'

            },
            {
                id: 5,
                blogImg: 'blog5',
                title: 'Do not Think You Are Creative ? Think Again!A Different Look At The Meaning Of Creativity ',
                description: 'Think about your place of work. Would you say that your work environment mimics the sitcom The answer may surprise you! ',
                author: 'Garry Keller',
                date: '26-Apr-2021'
            },
            {
                id: 6,
                blogImg: 'blog6',
                title: 'The Benefits of Creativity: Need Confidence? Be Creative!',
                description: 'Have you ever wondered about what makes something truly creative?The answer may surprise you!',
                author: 'Garry Keller',
                date: '26-Apr-2021'
            },
            {
                id: 7,
                blogImg: 'blog7',
                title: 'You Failed... Celebrate It!',
                description: 'Are you creative enough for the future? In the last couple years, creative skills ranked high for demand, why is that?',
                author: 'Garry Keller',
                date: '26-Apr-2021'
            },
            {
                id: 8,
                blogImg: 'blog8',
                title: 'What to Expect From a Curiosity 2 Create Class?',
                description: 'Think about your place of work. Would you say that your work environment mimics the sitcom The answer may surprise you! ',
                author: 'James Stone',
                date: '27-Apr-2021'
            },
            {
                id: 9,
                blogImg: 'blog9',
                title: 'What is Curiosity 2 Create?: Why it was Made',
                description: 'Have you ever wondered about what makes something truly creative?The answer may surprise you!',
                author: 'Garry Keller',
                date: '26-Apr-2021',
            }
        ],

    },
    getters: {
        homeBlogs: state => state.homeBlogs,
        blogs: state => state.allBlogs,


    }
})