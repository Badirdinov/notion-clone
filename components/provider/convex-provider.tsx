'use client'

import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import type { ChildProps } from "@/types";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const ConvexClientProvider = ({children}: ChildProps) => {
    return (
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
              {children}
          </ConvexProviderWithClerk>
      </ClerkProvider>
    );
};

export default ConvexClientProvider;
