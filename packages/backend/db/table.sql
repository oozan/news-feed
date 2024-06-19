
-- enable the uuid-ossp extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


-- Create statement for newsfeed table
CREATE TABLE newsfeed (
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	title TEXT NOT NULL,
	content TEXT NOT NULL,
	news TEXT NOT NULL,
	created_by TEXT NOT NULL,
    created_at TIMESTAMP 
);


INSERT INTO newsfeed (id, title, content, news, created_by, created_at) 
VALUES 
  (uuid_generate_v4(), 'Breaking News: COVID-19 Vaccine Rollout Begins', 'The COVID-19 vaccine rollout has officially begun in several countries, marking a significant milestone in the fight against the pandemic.', 'COVID-19', 'Health Ministry', NOW()),
  (uuid_generate_v4(), 'Tech Giant Unveils New Smartphone Model', 'Tech giant XYZ has announced the launch of its latest smartphone model, boasting cutting-edge features and advanced technology.', 'Technology', 'TechNews', NOW()),
  (uuid_generate_v4(), 'World Leaders Gather for Climate Summit', 'Leaders from around the world are convening for a crucial climate summit to discuss measures to combat climate change and promote sustainability.', 'Environment', 'GlobalNow', NOW()),
  (uuid_generate_v4(), 'New Study Reveals Benefits of Mediterranean Diet', 'A new study suggests that following a Mediterranean diet can lead to improved heart health and longevity.', 'Health', 'NutritionToday', NOW()),
  (uuid_generate_v4(), 'Space Exploration: Rover Discovers Evidence of Ancient Life on Mars', 'NASA Perseverance rover has made a groundbreaking discovery, uncovering evidence of ancient microbial life on the surface of Mars.', 'Space', 'SpaceExploration', NOW()),
  (uuid_generate_v4(), 'Finance News: Stock Market Soars to Record Highs', 'The stock market has surged to record highs, driven by strong earnings reports and optimism about economic recovery.', 'Finance', 'MarketWatch', NOW()),
  (uuid_generate_v4(), 'Entertainment: Oscar-Winning Actor Launches Production Company', 'Renowned actor John Doe has launched his own production company, aiming to produce groundbreaking films and television shows.', 'Entertainment', 'HollywoodReporter', NOW()),
  (uuid_generate_v4(), 'Sports Update: Tennis Star Wins Grand Slam Title', 'Tennis sensation Jane Smith has clinched her first Grand Slam title, cementing her status as one of the top players in the world.', 'Sports', 'SportsNews', NOW()),
  (uuid_generate_v4(), 'Breaking News: Major Earthquake Strikes Pacific Ring of Fire', 'A powerful earthquake has rocked several countries along the Pacific Ring of Fire, triggering tsunami warnings and widespread damage.', 'Natural Disasters', 'EmergencyAlert', NOW()),
  (uuid_generate_v4(), 'Technology: AI-powered Robot Assists in Healthcare', 'A groundbreaking AI-powered robot is revolutionizing healthcare by assisting doctors and nurses in patient care and medical procedures.', 'Healthcare', 'TechInnovation', NOW()),
  (uuid_generate_v4(), 'Business Update: Global Company Announces Expansion Plans', 'A leading multinational corporation has revealed ambitious expansion plans, aiming to enter new markets and increase its global presence.', 'Business', 'BusinessInsider', NOW()),
  (uuid_generate_v4(), 'Science News: Breakthrough in Cancer Research', 'Scientists have made a significant breakthrough in cancer research, developing a promising new treatment that targets cancer cells more effectively.', 'Science', 'ScienceDaily', NOW()),
  (uuid_generate_v4(), 'Education: Online Learning Platform Launches New Courses', 'An online learning platform has launched a range of new courses, catering to diverse interests and skill levels.', 'Education', 'OnlineLearning', NOW()),
  (uuid_generate_v4(), 'Health Alert: Outbreak of Dengue Fever Reported in Southeast Asia', 'Health authorities have issued a warning following an outbreak of Dengue fever in several countries in Southeast Asia, urging vigilance and preventive measures.', 'Health', 'HealthAlert', NOW()),
  (uuid_generate_v4(), 'Travel Update: Tourism Industry Prepares for Summer Season', 'The tourism industry is gearing up for the summer season, with destinations worldwide preparing to welcome tourists after pandemic-related restrictions.', 'Travel', 'TravelNews', NOW());


INSERT INTO newsfeed (id, title, content, news, created_by, created_at) 
VALUES 
  (uuid_generate_v4(), 'Art and Culture: Museum Exhibition Celebrates Local Artists', 'A museum exhibition showcasing the works of talented local artists has opened to the public, highlighting the vibrant art and culture of the community.', 'Art', 'LocalArtGallery', NOW()),
  (uuid_generate_v4(), 'Technology: Company Launches Sustainable Tech Initiative', 'A technology company has launched a new initiative focused on sustainability, aiming to reduce its carbon footprint and promote eco-friendly practices in the tech industry.', 'Technology', 'GreenTechNews', NOW()),
  (uuid_generate_v4(), 'Politics: Government Announces Infrastructure Investment Plan', 'The government has unveiled a comprehensive infrastructure investment plan, allocating funds for the development of roads, bridges, and public transportation systems.', 'Politics', 'GovernmentPressOffice', NOW()),
  (uuid_generate_v4(), 'Entertainment News: Pop Star Releases Highly Anticipated Album', 'Chart-topping pop star Sarah Johnson has released her highly anticipated album, drawing praise from fans and critics alike for its catchy tunes and heartfelt lyrics.', 'Entertainment', 'PopMusicMagazine', NOW()),
  (uuid_generate_v4(), 'Science Update: Researchers Make Breakthrough in Renewable Energy', 'Scientists have achieved a major breakthrough in renewable energy research, developing a new technology that promises to enhance the efficiency of solar panels and wind turbines.', 'Science', 'RenewableEnergyJournal', NOW()),
  (uuid_generate_v4(), 'Health and Wellness: Yoga Retreat Offers Relaxation and Mindfulness', 'A yoga retreat set in a serene location offers participants the opportunity to unwind, rejuvenate, and cultivate mindfulness through yoga practice and meditation.', 'Health', 'YogaWellnessCenter', NOW()),
  (uuid_generate_v4(), 'Business Update: Startup Secures Funding for Expansion', 'A promising startup has secured significant funding from investors, allowing it to expand its operations and reach new markets.', 'Business', 'StartupNews', NOW()),
  (uuid_generate_v4(), 'Sports: Soccer Team Clinches Championship Victory', 'The local soccer team has emerged victorious in the championship final, celebrating a hard-fought win and earning praise from fans for their exceptional performance.', 'Sports', 'SoccerTimes', NOW()),
  (uuid_generate_v4(), 'Education: School Launches STEM Education Program', 'A prestigious school has launched a new STEM education program, aiming to inspire students to pursue careers in science, technology, engineering, and mathematics.', 'Education', 'STEMEducationCenter', NOW()),
  (uuid_generate_v4(), 'Travel: Explore the Beauty of Remote Island Paradise', 'Embark on an unforgettable journey to a remote island paradise, where crystal-clear waters, pristine beaches, and lush landscapes await adventurous travelers seeking tranquility and natural beauty.', 'Travel', 'IslandExplorerMagazine', NOW()),
  (uuid_generate_v4(), 'Fashion and Style: Designer Showcases Latest Collection at Fashion Week', 'Renowned fashion designer Jane Doe has unveiled her latest collection at Fashion Week, captivating audiences with her innovative designs and exquisite craftsmanship.', 'Fashion', 'FashionWeekReport', NOW()),
  (uuid_generate_v4(), 'Environment: Conservation Efforts Protect Endangered Species', 'Conservation organizations have launched initiatives to protect endangered species and preserve their habitats, emphasizing the importance of biodiversity and ecosystem conservation.', 'Environment', 'ConservationToday', NOW()),
  (uuid_generate_v4(), 'Technology: AI-Powered Virtual Assistant Simplifies Daily Tasks', 'An AI-powered virtual assistant revolutionizes daily tasks by providing personalized assistance and streamlining workflows, making life easier and more efficient for users.', 'Technology', 'AIInnovationNews', NOW()),
  (uuid_generate_v4(), 'Food and Drink: Culinary Festival Celebrates Local Cuisine', 'A culinary festival celebrates the rich diversity of local cuisine, bringing together food enthusiasts to savor delicious dishes, explore culinary traditions, and support local chefs and vendors.', 'Food', 'CulinaryFestivalTimes', NOW()),
  (uuid_generate_v4(), 'Health Alert: Rise in Cases Prompts Public Health Warning', 'A surge in COVID-19 cases prompts public health officials to issue a warning, urging the community to follow safety guidelines and get vaccinated to prevent further spread of the virus.', 'Health', 'PublicHealthAlert', NOW());
