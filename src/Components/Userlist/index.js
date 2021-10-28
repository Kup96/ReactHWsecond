import React, { Component } from 'react';
import styles from './user.module.css';

import UserList from './UserList';

class Users extends Component {
    constructor(props) {
        super(props);


        this.state = {
            usersDB: [
                {id:1, avatar: "https://www.liga.net/images/general/2019/02/14/20190214174619-9721.png", name: "Vasiliy", surname: "Pupkin", choosen: false},
                {id:2, avatar: "https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty27.jpg", name: "Andrian", surname: "Popov", choosen: false},
                {id:3, avatar: "https://s0.rbk.ru/v6_top_pics/media/img/9/85/755972367696859.jpg", name: "Innokentiya", surname: "Pupkina", choosen: false},
                {id:4, avatar: "https://www.liga.net/images/general/2019/02/14/20190214174621-3508.png", name: "Oslo", surname: "Lukan", choosen: false},
                {id:5, avatar: "https://www.komarov.design/content/images/2020/11/image-4.jpeg", name: "Loras", surname: "Vito", choosen: false},
                {id:6, avatar: "https://klike.net/uploads/posts/2020-08/1597994286_2.jpg", name: "Disrupt", surname: "Trall", choosen: false},
                {id:7, avatar: "https://likeyou.io/wp-content/uploads/2019/02/Snimok-ekrana-2019-02-15-v-16.03.56.png", name: "Storm", surname: "Spirit", choosen: false},
                {id:8, avatar: "https://cdn.maximonline.ru/0a/dd/68/0add6885352bd545197842b6b82ba44a/728x728_1_4ab39e35ca1d60eb8fac6ccf337c8083@1024x1024_0xac120002_17152158281550233735.jpg", name: "Strans", surname: "Lukato", choosen: false},
                {id:9, avatar: "https://the-steppe.com/pictures/files/Alua%20Shymkent/WhatsApp%20Image%202019-09-06%20at%2010.37.49.jpeg", name: "Kolas", surname: "Atrays", choosen: false},
                {id:10, avatar: "https://cameralabs.org/media/k2/items/cache/3cb06e4cb464be7a87ae9907c7d62b4b_L.jpg", name: "Ghola", surname: "Ovgonsa", choosen: false},
                {id:11, avatar: "https://www.takefoto.ru/userfiles/image/Dlya%20Statey/%D0%9B%D1%8E%D0%B4%D0%B8%20%D0%B2%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%D1%85/1.jpg", name: "Mira", surname: "Panio", choosen: false},

            ],
            
        };
    }

    mapUsers = (user, i) => {
        const choose = () => {
            const { usersDB } = this.state;
            const copyUsers = [...usersDB];
                copyUsers[i] = {...copyUsers[i], choosen: !copyUsers[i].choosen,}

            this.setState({ usersDB: copyUsers });
        };

        const remove = () => {
            const { usersDB } = this.state;
            const usersCopy = [...usersDB];
            usersCopy.splice(i, 1);
            this.setState({ usersDB: usersCopy });
        };
        return (<UserList key = { user.id } user = {user} remove = {remove} choose = {choose}/>);

    };

    render() {
        const { usersDB } = this.state;
        const  userslist = usersDB.map(this.mapUsers);

        return (
            <article>
                {userslist}
            </article>
        );
    }
}




export default Users;





