
// 진행 중인 미션 응답 형식
export const formatOngoingMissionsResponse = (missions) => {
    return {
      data: missions.map((mission) => ({
        missionId: mission.mission.id,
        missionTitle: mission.mission.name,  
        missionPoints: mission.mission.point,  
        restaurant: {
          restaurantId: mission.restaurant.id, 
          restaurantName: mission.restaurant.name, 
        },
        status: mission.status,  
        createdAt: mission.created_at,  
      })),
      pagination: {
        total: missions.length, // 총 미션 수
      },
    };
  };
  
  // 미션 완료 응답 형식
  export const formatCompleteMissionResponse = (result) => {
    if (result.count > 0) {
      return {
        message: '미션 성공!',
      };
    } else {
      return {
        error: '미션이 완료되지 않았습니다.',
      };
    }
  };
  