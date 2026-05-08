const profilesData = [
    {
        id: 1,
        name: "尹迪康1号",
        gender: "male",
        age: 28,
        occupation: "软件工程师",
        location: "上海",
        bio: "热爱编程，喜欢旅行，期待遇见那个她",
        tags: ["程序员", "旅行", "美食"],
        height: "178cm",
        education: "硕士",
        salary: "20-30k",
        avatar: "./1.jpg"
    },
    // {
    //     id: 2,
    //     name: "李小姐",
    //     gender: "female",
    //     age: 26,
    //     occupation: "设计师",
    //     location: "上海",
    //     bio: "文艺青年，喜欢摄影和咖啡，希望找到一个懂我的人",
    //     tags: ["设计", "摄影", "咖啡"],
    //     height: "165cm",
    //     education: "本科",
    //     salary: "15-20k",
    //     avatar: "./2.jpg"
    // },
    {
        id: 3,
        name: "尹迪康2号",
        gender: "male",
        age: 32,
        occupation: "金融分析师",
        location: "上海",
        bio: "稳重踏实，有责任心，期待组建幸福家庭",
        tags: ["金融", "健身", "阅读"],
        height: "180cm",
        education: "硕士",
        salary: "30-50k",
        avatar: "./3.jpg"
    },
    // {
    //     id: 4,
    //     name: "刘小姐",
    //     gender: "female",
    //     age: 27,
    //     occupation: "教师",
    //     location: "上海",
    //     bio: "温柔善良，喜欢小朋友，希望能遇到志同道合的另一半",
    //     tags: ["教育", "音乐", "烹饪"],
    //     height: "168cm",
    //     education: "硕士",
    //     salary: "10-15k",
    //     avatar: "./1.jpg"
    // },
    {
        id: 5,
        name: "尹迪康3号",
        gender: "male",
        age: 30,
        occupation: "产品经理",
        location: "上海",
        bio: "阳光开朗，热爱生活，期待与你一起探索世界",
        tags: ["产品", "户外", "电影"],
        height: "175cm",
        education: "本科",
        salary: "25-35k",
        avatar: "./2.jpg"
    },
    // {
    //     id: 6,
    //     name: "赵小姐",
    //     gender: "female",
    //     age: 25,
    //     occupation: "护士",
    //     location: "上海",
    //     bio: "细心体贴，善解人意，希望找到一个温暖的家",
    //     tags: ["医疗", "瑜伽", "旅行"],
    //     height: "163cm",
    //     education: "本科",
    //     salary: "8-12k",
    //     avatar: "./3.jpg"
    // }
];

function renderProfiles(profiles) {
    const grid = document.getElementById('profilesGrid');
    grid.innerHTML = '';

    profiles.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'profile-card';
        card.onclick = () => showProfileDetail(profile);

        card.innerHTML = `
            <div class="profile-avatar" style="background: linear-gradient(135deg, #667eea, #764ba2);">
                <img src="${profile.avatar}" alt="${profile.name}" style="width: 100%; height: 100%; object-fit: contain;">
            </div>
            <div class="profile-info">
                <h3>${profile.name}，${profile.age}岁</h3>
                <p>${profile.occupation} | ${profile.location}</p>
                <p>${profile.bio}</p>
                <div class="profile-tags">
                    ${profile.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

function filterProfiles() {
    const genderFilter = document.getElementById('genderFilter').value;
    const ageFilter = document.getElementById('ageFilter').value;

    let filtered = profilesData;

    if (genderFilter !== 'all') {
        filtered = filtered.filter(p => p.gender === genderFilter);
    }

    if (ageFilter !== 'all') {
        switch (ageFilter) {
            case '20-25':
                filtered = filtered.filter(p => p.age >= 20 && p.age <= 25);
                break;
            case '26-30':
                filtered = filtered.filter(p => p.age >= 26 && p.age <= 30);
                break;
            case '31-35':
                filtered = filtered.filter(p => p.age >= 31 && p.age <= 35);
                break;
            case '36+':
                filtered = filtered.filter(p => p.age >= 36);
                break;
        }
    }

    renderProfiles(filtered);
}

function showProfileDetail(profile) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div style="height: 200px; border-radius: 15px; margin-bottom: 1.5rem; overflow: hidden;">
            <img src="${profile.avatar}" alt="${profile.name}" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
        <h2>${profile.name}，${profile.age}岁</h2>
        <p style="margin: 1rem 0; color: #666;">${profile.bio}</p>
        <div style="text-align: left; margin: 1.5rem 0;">
            <p><strong>职业：</strong>${profile.occupation}</p>
            <p><strong>地点：</strong>${profile.location}</p>
            <p><strong>身高：</strong>${profile.height}</p>
            <p><strong>学历：</strong>${profile.education}</p>
            <p><strong>薪资：</strong>${profile.salary}</p>
        </div>
        <div class="profile-tags" style="justify-content: center; margin-bottom: 1.5rem;">
            ${profile.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <button class="btn-primary" onclick="sendInterest('${profile.name}')">表达好感</button>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function sendInterest(name) {
    alert(`已向${name}表达好感！对方同意后将会通知您。`);
    closeModal();
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// document.getElementById('registerForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const gender = document.getElementById('gender').value;
//     const age = document.getElementById('age').value;
//     const phone = document.getElementById('phone').value;

//     if (!name || !gender || !age || !phone) {
//         alert('请填写完整信息');
//         return;
//     }

//     alert(`注册成功！欢迎${name}加入缘来如此！我们将尽快与您联系。`);
//     this.reset();
// });

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

document.getElementById('genderFilter').addEventListener('change', filterProfiles);
document.getElementById('ageFilter').addEventListener('change', filterProfiles);

document.addEventListener('DOMContentLoaded', function() {
    renderProfiles(profilesData);
});
