
import ImageProfile from "@/app/components/image-profile/profile.jpg";
export const BasicInfo = async () => {
  return {
    code: '0000',
    data: {
      items: [
        {
          avatar: ImageProfile,
          contact: {
            born: "08/10/2002",
            male: "Male",
            phone: "0868650928",
            mail: "viet.ngd.2002@gmail.com",
            address: "Phù Lưu - Trung Nghĩa - Yên Phong - Bắc Ninh"
          },
          interest: "My hobbies are soccer, listening to music and traveling...",
          skills: [
            {
              id: 1,
              description: "Good communication, presentation and teamwork skills."
            },
            {
              id: 2,
              description: "Public speaking, teamwork."
            }
          ],
          languagues: [
            {
              id: "VN",
              ratio: "100"
            },
            {
              id: "EN",
              ratio: "70"
            }
          ],
          objective: [
            {
              id:1,
              content: "Apply the knowledge learned to become a professional programming engineer."
            }, {
              id:2,
              content: "Make products that help the company and generate income for the company as well as yourself."
            }, {
              id:3,
              content: "Long-term association with the company."
            }
          ],
          education: {
            school: "Post and Telecomunications Institute of Technology",
            startYear: 2020,
            endYear: 2025, 
            majors: "Electronics and Telecommunication.",
            point: 2.81
          },
          activities: [
            {
            id: 1,
            text: "Join the school's volunteer club",
            startYear: 2020,
            endYear: 2022, 
          },
          {
            id: 2,
            text: "Night distribution for the homeless.",
            time: null
          },
        ],
        workExperience: [
          {
            refData:{
            startDate: "18/07/2023",
            endDate: null,
            experience: [
              {
                id: 1,
                content: "Having good ability on implement algorithms, for implementation new feature"
              },
              {
                id: 2,
                content: "Experienced with React Hook, Next js, HTML, CSS, SCSS, Tailwind Css, JavaScript, TypeScript. Have experience tools: Microsoft Office Word, Excel, PowerPoint, Visual Studio Code Special Tools: Jira, Git."
              },
              {
                id: 3,
                content: "Experienced implement responsive web app support for multiples devices. Used to run an associated book and author list API using Express, MongoDB, Postman"
              }
            ],
            honors: null
          }}
        ]
        }
      ]
    },
    message: 'Thanh cong',
  }
}