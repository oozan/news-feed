-- Create statement for newsfeed table
CREATE TABLE newsfeed (
	id VARCHAR ( 255 ) PRIMARY KEY,
	title TEXT NOT NULL,
	content TEXT NOT NULL,
	news TEXT NOT NULL,
	created_by TEXT NOT NULL,
    created_at TIMESTAMP 
);

-- Insert values for newsfeed table

INSERT INTO newsfeed (id, title, content, news, created_by, created_at) VALUES
('1', 'Breaking News 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'New', 'John Doe', '2023-09-19 10:30:00'),
('2', 'Latest Updates 2', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'News Flash', 'Jane Smith', '2023-09-19 11:45:00'),
('3', 'Important Announcement 3', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.', 'Latest', 'Bob Johnson', '2023-09-19 12:15:00'),
('4', 'Top Story 4', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'Alert', 'Alice Brown', '2023-09-19 13:20:00'),
('5', 'Local News 5', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Breaking', 'Eva Garcia', '2023-09-19 14:40:00'),
('6', 'Business Update 6', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', 'Update', 'Michael Wilson', '2023-09-19 15:55:00'),
('7', 'Health News 7', 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.', 'New Release', 'Sarah Taylor', '2023-09-19 16:10:00'),
('8', 'Technology Insights 8', 'Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', 'Breaking Update', 'David Lee', '2023-09-19 17:25:00'),
('9', 'Science Breakthrough 9', 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.', 'Hot News', 'Olivia Clark', '2023-09-19 18:30:00'),
('10', 'Entertainment Buzz 10', 'Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', 'Special Report', 'William Turner', '2023-09-19 19:45:00'),
('11', 'Sports Highlights 11', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.', 'Exclusive', 'Sophia Hernandez', '2023-09-19 20:55:00'),
('12', 'Travel Updates 12', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Breaking Story', 'Daniel Martin', '2023-09-19 21:10:00'),
('13', 'Fashion Trends 13', 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.', 'News Alert', 'Ava White', '2023-09-19 22:20:00'),
('14', 'Foodie Corner 14', 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.', 'Important News', 'Liam Anderson', '2023-09-19 23:30:00'),
('15', 'Weather Update 15', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Latest Report', 'Emily Davis', '2023-09-20 00:45:00');

-- Add more INSERT statements

INSERT INTO newsfeed (id, title, content, news, created_by, created_at) VALUES
('16', 'Technology News 16', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Breaking Update', 'Jennifer Smith', '2023-09-20 01:55:00'),
('17', 'Finance Insights 17', 'Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', 'Special Report', 'Robert Johnson', '2023-09-20 02:10:00'),
('18', 'Education Spotlight 18', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.', 'Exclusive', 'Sophia Martinez', '2023-09-20 03:25:00'),
('19', 'Travel Adventures 19', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', 'Breaking Story', 'Daniel White', '2023-09-20 04:30:00'),
('20', 'Music Highlights 20', 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.', 'News Alert', 'Ella Johnson', '2023-09-20 05:45:00'),
('21', 'Environment Watch 21', 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.', 'Important News', 'William Garcia', '2023-09-20 06:55:00'),
('22', 'Health and Fitness 22', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Latest Report', 'Liam Wilson', '2023-09-20 07:10:00'),
('23', 'Movie Buzz 23', 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.', 'Hot News', 'Ava Martin', '2023-09-20 08:20:00'),
('24', 'Food and Recipes 24', 'Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', 'Breaking Update', 'Lucas Davis', '2023-09-20 09:30:00'),
('25', 'Art and Culture 25', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'News Flash', 'Sophia Turner', '2023-09-20 10:45:00'),
('26', 'Pets and Animals 26', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Breaking', 'Oliver Brown', '2023-09-20 11:55:00'),
('27', 'Science and Discovery 27', 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.', 'New Release', 'Emily Taylor', '2023-09-20 12:10:00'),
('28', 'Fashion Trends 28', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Breaking Story', 'Noah Johnson', '2023-09-20 13:20:00'),
('29', 'Sports Update 29', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', 'Update', 'Ella Davis', '2023-09-20 14:30:00'),
('30', 'Weather Forecast 30', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'Alert', 'William Martin', '2023-09-20 15:45:00');

INSERT INTO newsfeed (id, title, content, news, created_by, created_at) VALUES
('31', 'Tech Giant Releases New Smartphone', 'In a surprise announcement, the tech giant XYZ has unveiled its latest flagship smartphone with groundbreaking features.', 'Tech', 'John Doe', '2023-09-30 10:00:00'),
('32', 'New Scientific Discovery Sheds Light on Dark Matter', 'Researchers at the leading astrophysics institute have made a significant breakthrough in understanding dark matter.', 'Science', 'Alice Smith', '2023-09-29 15:30:00'),
('33', 'Local Community Donates Thousands of Meals to Needy Families', 'A heartwarming story of generosity as a local community rallies together to provide food for families in need during the holiday season.', 'Community', 'Emily Johnson', '2023-09-28 14:20:00'),
('34', 'Stock Market Hits Record High Amid Economic Recovery', 'Investors are celebrating as the stock market reaches an all-time high, reflecting optimism about the country''s economic rebound.', 'Finance', 'Robert Brown', '2023-09-27 16:45:00'),
('35', 'New Art Exhibit Showcases Emerging Artists', 'A new art gallery is featuring the work of talented emerging artists, providing a platform for their creativity to shine.', 'Art', 'Sophia Lee', '2023-09-26 11:10:00'),
('36', 'Environmentalists Rally for Climate Action', 'Environmental activists gather in the city center to demand urgent action on climate change, calling for sustainable policies.', 'Environment', 'Michael Green', '2023-09-25 09:55:00'),
('37', 'Space Agency Plans Mission to Explore Jupiter''s Moons', 'A space agency has announced plans for an ambitious mission to explore the moons of Jupiter, hoping to unlock secrets of our solar system.', 'Space', 'David Clark', '2023-09-24 08:30:00'),
('38', 'New Restaurant Opens, Offering Fusion Cuisine', 'Food enthusiasts can now savor a fusion of international flavors at the newly opened restaurant, "Taste World Fusion."', 'Food', 'Linda Martinez', '2023-09-23 19:15:00'),
('39', 'World Health Organization Launches Vaccination Campaign', 'The WHO has initiated a global vaccination campaign to combat infectious diseases and improve public health worldwide.', 'Health', 'William Taylor', '2023-09-22 12:40:00'),
('40', 'Film Festival Celebrates Diversity in Cinema', 'A renowned film festival kicks off, celebrating diverse voices and stories in the world of cinema.', 'Entertainment', 'Karen Wilson', '2023-09-21 17:20:00'),
('41', 'Sports Team Clinches Championship Victory', 'The local sports team secures a thrilling championship victory after a hard-fought season, bringing joy to fans.', 'Sports', 'James Anderson', '2023-09-20 21:05:00'),
('42', 'New Technology Startup Raises Millions in Funding', 'A promising tech startup has successfully raised millions of dollars in funding to develop its innovative products.', 'Tech', 'Olivia White', '2023-09-19 13:25:00'),
('43', 'Rare Species Rediscovered in Remote Rainforest', 'Biologists make an astonishing discovery as they find a species thought to be extinct in a remote rainforest.', 'Environment', 'Daniel Garcia', '2023-09-18 08:50:00'),
('44', 'Celebrity Charity Gala Raises Millions for Charity', 'A star-studded charity gala event raises millions of dollars for various charitable causes, making a significant impact.', 'Celebrity', 'Megan Adams', '2023-09-17 22:15:00'),
('45', 'New Education Initiative Aims to Improve Literacy', 'A new education initiative is launched with the goal of improving literacy rates among disadvantaged youth.', 'Education', 'Matthew Turner', '2023-09-16 16:30:00');



INSERT INTO newsfeed (id, title, content, news, created_by, created_at) VALUES
('46', 'Historic Building Restored to Its Former Glory', 'A century-old historic building has undergone an extensive restoration project, preserving its architectural heritage.', 'Architecture', 'Ella Turner', '2023-09-15 11:45:00'),
('47', 'Major Scientific Breakthrough in Quantum Computing', 'Scientists achieve a significant milestone in quantum computing, bringing us closer to revolutionary computing power.', 'Science', 'Benjamin Adams', '2023-09-14 14:05:00'),
('48', 'Local Music Festival Draws Thousands of Fans', 'Music enthusiasts flock to the annual local music festival, enjoying live performances from a diverse lineup of artists.', 'Music', 'Sophie Harris', '2023-09-13 18:30:00'),
('49', 'New National Park Established to Protect Wildlife', 'A new national park is established to safeguard the habitat of endangered wildlife species and promote conservation efforts.', 'Environment', 'Lucas Brown', '2023-09-12 09:20:00'),
('50', 'AI-Powered Healthcare App Revolutionizes Patient Care', 'A cutting-edge healthcare app powered by artificial intelligence is transforming the way patients receive medical advice and support.', 'Health', 'Ava Parker', '2023-09-11 16:15:00'),
('51', 'Fashion Week Showcases Latest Trends and Designs', 'Fashion Week kicks off with top designers unveiling their latest collections, setting the fashion trends for the upcoming season.', 'Fashion', 'Noah Wright', '2023-09-10 20:55:00'),
('52', 'New Sports Stadium to Host International Events', 'A state-of-the-art sports stadium is inaugurated and set to host international sporting events, attracting athletes from around the world.', 'Sports', 'Grace Clark', '2023-09-09 22:40:00'),
('53', 'Renowned Chef Opens Michelin-Star Restaurant', 'A world-renowned chef opens a new Michelin-starred restaurant, promising an exceptional culinary experience for food connoisseurs.', 'Food', 'Daniel Johnson', '2023-09-08 13:10:00'),
('54', 'Space Telescope Captures Stunning Images of Distant Galaxies', 'A space telescope sends back breathtaking images of galaxies millions of light-years away, advancing our understanding of the universe.', 'Space', 'Emma Smith', '2023-09-07 10:25:00'),
('55', 'Community Volunteers Clean Up Local Park', 'Dedicated community volunteers come together for a park cleanup initiative, beautifying the local environment for all to enjoy.', 'Community', 'Liam Wilson', '2023-09-06 14:20:00'),
('56', 'Artificial Reef Project Boosts Marine Biodiversity', 'An artificial reef project in the coastal waters helps restore marine biodiversity and provides a habitat for a variety of aquatic species.', 'Environment', 'Olivia Davis', '2023-09-05 16:45:00'),
('57', 'Film Director Receives Lifetime Achievement Award', 'A renowned film director is honored with a lifetime achievement award for their outstanding contributions to the world of cinema.', 'Entertainment', 'Lucy Brown', '2023-09-04 19:30:00'),
('58', 'Groundbreaking Medical Research Offers Hope for Rare Disease', 'Researchers make a groundbreaking discovery in the treatment of a rare genetic disease, offering hope to affected individuals.', 'Health', 'James Taylor', '2023-09-03 09:50:00'),
('59', 'Innovative Tech Startup Wins Industry Innovation Award', 'A forward-thinking tech startup receives industry recognition for its innovative solutions, shaping the future of technology.', 'Tech', 'Aiden Martinez', '2023-09-02 12:15:00'),
('60', 'Local Theater Group Stages Shakespearean Classic', 'A local theater group wows audiences with a captivating performance of a Shakespearean classic, showcasing exceptional talent.', 'Entertainment', 'Sophia Adams', '2023-09-01 17:10:00');
