
import { getUserOngoingMissions } from '../services/mission.service.js';
import { completeMission } from '../services/mission.service.js';

export const getUserOngoingMissionsController = async (req, res) => {
    /*
    #swagger.summary = '사용자의 진행 중인 미션 조회 API';
    #swagger.parameters['userId'] = {
      in: 'path',
      required: true,
      description: '사용자 ID',
      schema: { type: 'integer', example: 123 }
    };
    #swagger.responses[200] = {
      description: "진행 중인 미션 조회 성공 응답",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number", example: 1 },
                title: { type: "string", example: "미션 제목" },
                description: { type: "string", example: "미션 설명" },
                status: { type: "string", example: "ONGOING" }
              }
            }
          }
        }
      }
    };
    #swagger.responses[500] = {
      description: "서버 오류로 인해 진행 중인 미션 조회 실패",
      schema: {
        type: "object",
        properties: {
          error: { type: "string", example: "Failed to fetch ongoing missions." }
        }
      }
    };
  */
  const userId = parseInt(req.params.userId);
  try {
    const missions = await getUserOngoingMissions(userId);
    res.json(missions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ongoing missions.' });
  }
};

export const completeMissionController = async (req, res) => {
  /*
    #swagger.summary = '사용자의 특정 미션 완료 API';
    #swagger.parameters['userId'] = {
      in: 'path',
      required: true,
      description: '사용자 ID',
      schema: { type: 'integer', example: 123 }
    };
    #swagger.parameters['missionId'] = {
      in: 'path',
      required: true,
      description: '미션 ID',
      schema: { type: 'integer', example: 456 }
    };
    #swagger.responses[200] = {
      description: "미션 완료 성공 응답",
      schema: {
        type: "object",
        properties: {
          message: { type: "string", example: "Mission completed successfully." }
        }
      }
    };
    #swagger.responses[404] = {
      description: "완료할 미션이 없는 경우",
      schema: {
        type: "object",
        properties: {
          error: { type: "string", example: "No ongoing mission found to complete." }
        }
      }
    };
    #swagger.responses[500] = {
      description: "서버 오류로 인해 미션 완료 실패",
      schema: {
        type: "object",
        properties: {
          error: { type: "string", example: "Failed to complete mission." }
        }
      }
    };
  */
  const { userId, missionId } = req.params;
  try {
    const result = await completeMission(parseInt(userId), parseInt(missionId));
    if (result.count > 0) {
      res.json({ message: 'Mission completed successfully.' });
    } else {
      res.status(404).json({ error: 'No ongoing mission found to complete.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to complete mission.' });
  }
};
