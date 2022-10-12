import { usersApi } from "@api";
import { defaultValues } from "@components/Forms/Login/defaultValues";
import { SigUpType, UserPayload } from "@types";
import { useEffect, useState } from "react";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

const useSigUp = () => {
  const [sigUp, setSigUp] = useState<SigUpType>();

  useEffect(() => {
    // usersApi.add(sigUp)
  }, []);
};
