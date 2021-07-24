import { getCustomRepository } from "typeorm";
import { ParticipantRole, IParticipant } from "../database/model/Participant";
import { IInterview } from "../database/model/Interview";
import ParticipantRepo from "../database/repository/ParticipantRepo";
import InterviewRepo from "../database/repository/InterviewRepo";

const seeder = async () => {
	const pRepo = getCustomRepository(ParticipantRepo);
	const iRepo = getCustomRepository(InterviewRepo);
	const participants: IParticipant[] = [
		{
			name: "Dhara Goyal",
			role: ParticipantRole.CANDIDATE,
			email: "goyaldhara555@gmail.com"
		},
		{
			name: "Puja",
			role: ParticipantRole.CANDIDATE,
			email: "puja@email.com"
		},
		{
			name: "Test Candidate 2",
			role: ParticipantRole.CANDIDATE,
			email: "testcandidate2@email.com"
		},
		{
			name: "Test Candidate 3",
			role: ParticipantRole.CANDIDATE,
			email: "testcandidate3@email.com"
		},
		{
			name: "Sunny",
			role: ParticipantRole.INTERVIEWER,
			email: "sunny@email.com"
		},
		{
			name: "Sachin1",
			role: ParticipantRole.INTERVIEWER,
			email: "sachin@email.com"
		},
		{
			name: "Virat Kohli",
			role: ParticipantRole.INTERVIEWER,
			email: "virat@email.com"
		},
		{
			name: "Rohit Sharma",
			role: ParticipantRole.INTERVIEWER,
			email: "rohit@email.com"
		},
		{
			name: "Saurav",
			role: ParticipantRole.INTERVIEWER,
			email: "saurav@email.com"
		}
	];
	await pRepo.query("delete from participants");
	await iRepo.query("delete from interviews");
	await pRepo.save(participants);
};

export default seeder;
