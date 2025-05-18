import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";
import { StyledButton, StyledInfo, StyledTypography } from "../styled";
import { Box, Typography } from "@mui/material";
import DeleteAccount from "./DeleteAccount";
import { useUser } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useCancelSubcription } from "../../../hooks/useCancelSubsccription";

const ProfileActions = () => {
  const [isDeleteAccountDialogOpen, setIsDeleteAccountDialogOpen] =
    useState<boolean>(false);

  const { user, subscription } = useUser();
  const { mutate: cancelSubscriptionMutate } = useCancelSubcription();
  const navigate = useNavigate();

  const handleCancelSubscription = () => {
    if (!subscription) return;
    cancelSubscriptionMutate();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        width: "100%",
      }}
    >
      <StyledInfo>
        {subscription && (
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                color: "#F3EBFE",
                fontSize: "1.6rem",
                fontWeight: 600,
              }}
            >
              Підписка
            </Typography>

            <Typography sx={{ color: "#6a39a5", fontSize: "1.1rem" }}>
              Активована підписка{" "}
              <Box component="span" sx={{ fontWeight: 700 }}>
                {subscription?.subType}
              </Box>
            </Typography>

            {subscription.status === "expired" && (
              <Box>
                <Typography sx={{ color: "#6a39a5", fontSize: "1.2rem" }}>
                  Підписка закінчилася
                </Typography>
                <StyledButton
                  sx={{ maxWidth: "300px", color: "#E5D0FE", mt: 2 }}
                >
                  Продовжити підписку
                </StyledButton>
              </Box>
            )}

            <StyledButton
              onClick={handleCancelSubscription}
              sx={{ maxWidth: "300px", color: "#E5D0FE", mt: 2 }}
            >
              Скасувати підписку
            </StyledButton>
          </Box>
        )}

        <Box>
          <Typography
            sx={{
              color: "#F3EBFE",
              fontSize: "1.6rem",
              fontWeight: 600,
            }}
          >
            Історія креативів
          </Typography>

          {user?.createdCreatives && user?.createdCreatives > 0 ? (
            <Typography sx={{ color: "#6a39a5", fontSize: "0.9rem" }}>
              Креативів створено {user?.createdCreatives}
            </Typography>
          ) : null}

          <StyledButton
            onClick={() => navigate("/history")}
            startIcon={<AccessTimeIcon />}
            sx={{ maxWidth: "300px", color: "#E5D0FE", mt: 1 }}
          >
            Переглянути історію
          </StyledButton>
        </Box>
      </StyledInfo>

      <StyledInfo>
        <Box sx={{ mb: 3 }}>
          <StyledTypography
            sx={{
              fontSize: "1.3rem",
              mb: 0,
            }}
          >
            Зв’язатись з підтримкою
          </StyledTypography>

          <Typography sx={{ color: "#6a39a5", fontSize: "0.9rem", mb: 2 }}>
            Якщо у вас виникли питання стосовно вашого аккаунта, зв’яжіть з нами
          </Typography>

          <StyledButton
            onClick={() => navigate("/#support")}
            startIcon={<LocalPhoneIcon />}
            sx={{ maxWidth: "300px", color: "#E5D0FE" }}
          >
            Зв’язатись з нами
          </StyledButton>
        </Box>

        <Box>
          <StyledTypography
            sx={{
              fontSize: "1.3rem",
              mb: 0,
            }}
          >
            Видалити аккаунт
          </StyledTypography>

          <Typography sx={{ color: "#6a39a5", fontSize: "0.9rem", mb: 2 }}>
            Видалення вашого облікового запису призведе до видалення всієї вашої
            інформації з нашої бази даних. Це неможливо скасувати.
          </Typography>

          <DeleteAccount
            isDialogOpen={isDeleteAccountDialogOpen}
            setIsDialogOpen={setIsDeleteAccountDialogOpen}
          />
        </Box>
      </StyledInfo>
    </Box>
  );
};

export default ProfileActions;
