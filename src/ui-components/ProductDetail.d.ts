/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductDetailOverridesProps = {
    ProductDetail?: PrimitiveOverrideProps<FlexProps>;
    "Frame 401"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 7221379"?: PrimitiveOverrideProps<FlexProps>;
    "Basic Tee 6-Pack"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat."?: PrimitiveOverrideProps<TextProps>;
    Divider221382?: PrimitiveOverrideProps<ViewProps>;
    "Frame 7221383"?: PrimitiveOverrideProps<FlexProps>;
    Highlights?: PrimitiveOverrideProps<TextProps>;
    "Hand cut and sewn locally Dyed with our proprietary colors Pre-washed & pre-shrunk Ultra-soft 100% cotton"?: PrimitiveOverrideProps<TextProps>;
    Divider221386?: PrimitiveOverrideProps<ViewProps>;
    "Frame 7221387"?: PrimitiveOverrideProps<FlexProps>;
    Details?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."?: PrimitiveOverrideProps<TextProps>;
    "Frame 402"?: PrimitiveOverrideProps<FlexProps>;
    $192?: PrimitiveOverrideProps<TextProps>;
    "Frame 27221392"?: PrimitiveOverrideProps<FlexProps>;
    Rating?: PrimitiveOverrideProps<FlexProps>;
    "12 reviews"?: PrimitiveOverrideProps<TextProps>;
    "Frame 27221395"?: PrimitiveOverrideProps<FlexProps>;
    "Size Guide"?: PrimitiveOverrideProps<TextProps>;
    Size?: PrimitiveOverrideProps<TextProps>;
    "Frame 28221398"?: PrimitiveOverrideProps<FlexProps>;
    Button221399?: PrimitiveOverrideProps<FlexProps>;
    Button221400?: PrimitiveOverrideProps<FlexProps>;
    Button221401?: PrimitiveOverrideProps<FlexProps>;
    Button221402?: PrimitiveOverrideProps<FlexProps>;
    "Frame 28221403"?: PrimitiveOverrideProps<FlexProps>;
    Button221404?: PrimitiveOverrideProps<FlexProps>;
    Button221405?: PrimitiveOverrideProps<FlexProps>;
    Button221406?: PrimitiveOverrideProps<FlexProps>;
    Button221407?: PrimitiveOverrideProps<FlexProps>;
    Button221408?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type ProductDetailProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProductDetailOverridesProps | undefined | null;
}>;
export default function ProductDetail(props: ProductDetailProps): React.ReactElement;
