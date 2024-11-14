// mission.repository.js
import prisma from '../db.config.js';  // Prisma client import

// 사용자 ID에 해당하는 진행 중인 미션을 가져오는 함수
export const getUserOngoingMissions = async (userId) => {
  try {
    const ongoingMissions = await prisma.myMission.findMany({
      where: {
        userId: userId,
        status: 'active', // 'active' 상태인 미션만
      },
      include: {
        mission: true, // 연관된 mission 데이터 포함
        restaurant: true, // 연관된 restaurant 데이터 포함
      },
    });

    return ongoingMissions;
  } catch (error) {
    throw new Error('Failed to fetch ongoing missions: ' + error.message);
  }
};

// 미션을 완료하는 함수
export const completeMission = async (userId, missionId) => {
  try {
    const result = await prisma.myMission.updateMany({
      where: {
        userId: userId,
        missionId: missionId,
        status: 'active', // 진행 중인 미션만 완료 상태로 변경
      },
      data: {
        status: 'completed', // 'completed' 상태로 변경
      },
    });

    return result;  // 업데이트된 결과 반환
  } catch (error) {
    throw new Error('Failed to complete mission: ' + error.message);
  }
};
