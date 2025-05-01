const joinBtn = document.querySelector(".join-btn")
const closeBtn = document.querySelector(".close-btn")
const communitySectionEl = document.querySelector(".community-section")
const containerEl = document.querySelector(".container")
const joinTheForumBtn = document.querySelector(".join-the-forum-btn")
const CloseForumBtn = document.querySelector(".Close-forum-btn")
const viewAllMembersBtn = document.querySelector(".view-all-members-btn")
const backToTheCommunityBtn = document.querySelector(".back-to-the-community-btn")
const containerEl2 = document.querySelector(".container-2")
const searchBox = document.querySelector('.search-box');
const filterButtons = document.querySelectorAll('.filter-btn');
const userCards = document.querySelectorAll('.user-card');
const sortByRoleBtn = document.getElementById('sortByRole');


const openForumEl = () => {
containerEl.style.display = 'flex'
}

const closeForumEL = () => {
containerEl.style.display = 'none'
}

const closeCommunitySectionEl = () => {
communitySectionEl.style.display = 'none'
}

const openCommunitySectionEl = () => {
communitySectionEl.style.display = 'flex'
}

const viewAllMembers = () => {
containerEl2.style.display = 'flex'
}

const closeAllMembers = () => {
containerEl2.style.display = 'none'
}


joinBtn.addEventListener('click', openCommunitySectionEl)
closeBtn.addEventListener('click', closeCommunitySectionEl)
joinTheForumBtn.addEventListener('click', openForumEl)
CloseForumBtn.addEventListener('click', closeForumEL)
backToTheCommunityBtn.addEventListener('click', closeAllMembers)
viewAllMembersBtn.addEventListener('click', viewAllMembers)


document.addEventListener('DOMContentLoaded', function() {
    searchBox.addEventListener('input', filterUsers);
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            filterUsers();
        });
    });
    
    // Filter users based on search and role filter
    function filterUsers() {
        const searchTerm = searchBox.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').textContent;
        
        userCards.forEach(card => {
            const name = card.querySelector('.user-name').textContent.toLowerCase();
            const email = card.querySelector('.user-email').textContent.toLowerCase();
            const role = card.querySelector('.user-role').textContent;
            
            // Check if matches search term
            const matchesSearch = name.includes(searchTerm) || email.includes(searchTerm);
            
            // Check if matches role filter
            let matchesRole = true;
            if (activeFilter !== 'All') {
                matchesRole = role === activeFilter;
            }
            
            // Show/hide card based on filters
            if (matchesSearch && matchesRole) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
        animateCards()
    }
    // Optional: Add animation when filtering
    function animateCards() {
        userCards.forEach((card, index) => {
            if (card.style.display !== 'none') {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'none';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }
});
